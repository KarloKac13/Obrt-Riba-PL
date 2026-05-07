<template>
    <video autoplay loop muted>
    <source
      src="https://res.cloudinary.com/djb4cocmv/video/upload/v1701787664/Portfolio/Naslovna%20slika-video/vidback_furg7j.mp4"
      type="video/mp4"
      alt=""
    />
  </video>
</template>

<style scoped>
video {
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transform: scaleX(-1);
  transform-origin: center;
}
</style>