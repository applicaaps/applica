-- =====================================================================
-- CONFIGURAZIONE ROW LEVEL SECURITY (RLS) SU SUPABASE
-- Esegui questo script all'interno di Supabase SQL Editor
-- Riferimento: backedRules.md (Sezione 3)
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. ABILITAZIONE MASSIVA RLS SU TUTTE LE TABELLE (SICUREZZA ZERO-TRUST)
-- ---------------------------------------------------------------------
-- Questo blocco abilita automaticamente l'RLS su QUALSIASI tabella presente
-- nello schema public (comprese quelle create da Strapi).
-- Di default, abilitando l'RLS senza creare policy, l'accesso pubblico (REST API)
-- viene completamente bloccato.
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
    LOOP
        EXECUTE 'ALTER TABLE ' || quote_ident(r.tablename) || ' ENABLE ROW LEVEL SECURITY;';
    END LOOP;
END;
$$;

-- Nota: Le operazioni di INSERT, UPDATE e DELETE sono riservate a Strapi.
-- Strapi si connette al database Postgres come superuser (postgres.project_ref)
-- bypassando l'RLS di default, quindi non servono policy aggiuntive per la scrittura da backend.


-- ---------------------------------------------------------------------
-- 2. DEFINIZIONE DELLE POLICY PER "eventi"
-- ---------------------------------------------------------------------
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'eventi') THEN
        DROP POLICY IF EXISTS "Consenti lettura eventi pubblici a tutti" ON eventi;
        DROP POLICY IF EXISTS "Consenti lettura eventi pubblici ad anonimi" ON eventi;
        DROP POLICY IF EXISTS "Consenti lettura eventi riservati solo ad autenticati" ON eventi;

        -- Policy A: Consenti la lettura degli eventi pubblici ai soli utenti anonimi (non loggati)
        CREATE POLICY "Consenti lettura eventi pubblici ad anonimi"
        ON eventi
        FOR SELECT
        TO anon
        USING (visibilita = 'pubblico');

        -- Policy B: Consenti la lettura di TUTTI gli eventi (pubblici e riservati) agli utenti autenticati
        CREATE POLICY "Consenti lettura eventi riservati solo ad autenticati"
        ON eventi
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;
END;
$$;


-- ---------------------------------------------------------------------
-- 3. DEFINIZIONE DELLE POLICY PER "documenti"
-- ---------------------------------------------------------------------
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'documenti') THEN
        DROP POLICY IF EXISTS "Consenti lettura documenti pubblici a tutti" ON documenti;
        DROP POLICY IF EXISTS "Consenti lettura documenti pubblici ad anonimi" ON documenti;
        DROP POLICY IF EXISTS "Consenti lettura documenti riservati solo ad autenticati" ON documenti;

        -- Policy A: Consenti la lettura dei documenti pubblici ai soli utenti anonimi (non loggati)
        CREATE POLICY "Consenti lettura documenti pubblici ad anonimi"
        ON documenti
        FOR SELECT
        TO anon
        USING (visibilita = 'pubblico');

        -- Policy B: Consenti la lettura di TUTTI i documenti (pubblici e riservati) agli utenti autenticati
        CREATE POLICY "Consenti lettura documenti riservati solo ad autenticati"
        ON documenti
        FOR SELECT
        TO authenticated
        USING (true);
    END IF;
END;
$$;


-- ---------------------------------------------------------------------
-- 4. DEFINIZIONE DELLE POLICY PER "files" (Tabelle Media di Strapi)
-- ---------------------------------------------------------------------
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'files') THEN
        DROP POLICY IF EXISTS "Consenti lettura metadati files a tutti" ON files;

        CREATE POLICY "Consenti lettura metadati files a tutti"
        ON files
        FOR SELECT
        USING (true);
    END IF;
END;
$$;


-- ---------------------------------------------------------------------
-- 5. DEFINIZIONE DELLE POLICY PER LE TABELLE DI COLLEGAMENTO (MANY-TO-MANY)
-- ---------------------------------------------------------------------
-- Cerca dinamicamente le tabelle di collegamento per documenti-eventi ed applica la policy
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN 
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public' 
          AND (tablename = 'documenti_eventi_links' OR tablename = 'documenti_eventi' OR tablename LIKE '%documenti%eventi%')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "Consenti lettura relazioni documenti-eventi" ON ' || quote_ident(r.tablename) || ';';
        EXECUTE 'CREATE POLICY "Consenti lettura relazioni documenti-eventi" ON ' || quote_ident(r.tablename) || ' FOR SELECT USING (true);';
    END LOOP;
END;
$$;


-- ---------------------------------------------------------------------
-- 6. DEFINIZIONE DELLE POLICY PER "profiles" (SE UTILIZZATA)
-- ---------------------------------------------------------------------
-- Se hai una tabella "profiles" per dati aggiuntivi degli utenti:
/*
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') THEN
        DROP POLICY IF EXISTS "Consenti lettura proprio profilo" ON profiles;
        DROP POLICY IF EXISTS "Consenti aggiornamento proprio profilo" ON profiles;

        CREATE POLICY "Consenti lettura proprio profilo"
        ON profiles
        FOR SELECT
        TO authenticated
        USING (auth.uid() = id);

        CREATE POLICY "Consenti aggiornamento proprio profilo"
        ON profiles
        FOR UPDATE
        TO authenticated
        USING (auth.uid() = id)
        WITH CHECK (auth.uid() = id);
    END IF;
END;
$$;
*/
