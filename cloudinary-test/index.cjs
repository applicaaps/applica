const cloudinary = require('cloudinary').v2;

// 1. Configure Cloudinary (inline credentials as required by onboarding flow)
cloudinary.config({
  cloud_name: 'dme5ajgku',
  api_key: '578577829774151',
  api_secret: '7xWr0uajd6WJPClVV6uoDfieDTE',
  secure: true
});

async function run() {
  try {
    const sampleImageUrl = 'https://res.cloudinary.com/demo/image/upload/dog.jpg';
    
    // 2. Upload an image
    console.log("Uploading image...");
    const uploadResult = await cloudinary.uploader.upload(sampleImageUrl, {
      public_id: 'sample_dog'
    });
    
    console.log("Upload Success!");
    console.log("Secure URL:", uploadResult.secure_url);
    console.log("Public ID:", uploadResult.public_id);
    
    // 3. Get image details
    console.log("\nFetching image details...");
    const details = await cloudinary.api.resource(uploadResult.public_id);
    console.log("Width:", details.width);
    console.log("Height:", details.height);
    console.log("Format:", details.format);
    console.log("File Size (Bytes):", details.bytes);
    
    // 4. Transform the image
    // f_auto (fetch_format: 'auto') -> Automatically selects the best image format (e.g., WebP/AVIF) based on browser support.
    // q_auto (quality: 'auto') -> Automatically optimizes quality level to reduce file size while maintaining visual fidelity.
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto',
      secure: true
    });
    
    console.log("\nDone! Click link below to see optimized version of the image. Check the size and the format.");
    console.log("Transformed URL:", transformedUrl);
  } catch (error) {
    console.error("Error during execution:", error);
  }
}

run();
