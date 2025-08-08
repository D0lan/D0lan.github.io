---
layout: default
title: Album
description: Browse a collection of photos and videos capturing Aryan's adventures and experiments.
---

<section class="album-section">
  <h2 data-aos="fade-down">Photo &amp; Video Album</h2>
  <p style="text-align:center; margin-bottom:1rem; color:var(--muted-text);" data-aos="fade-up">A peek into my world — from rainy days to lab experiments.</p>
  <div class="gallery">
    <!-- Photo items -->
    <div class="gallery-item" data-aos="zoom-in">
      <img src="{{ '/assets/images/foggy_forest.jpg' | relative_url }}" alt="Foggy forest landscape">
    </div>
    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="50">
      <img src="{{ '/assets/images/rain_drops.jpg' | relative_url }}" alt="Rain drops on window bar">
    </div>
    <!-- Placeholder for user to add more photos or embed videos -->
    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
      <img src="{{ '/assets/images/foggy_forest.jpg' | relative_url }}" alt="Foggy forest landscape">
    </div>
    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="150">
      <img src="{{ '/assets/images/rain_drops.jpg' | relative_url }}" alt="Rain drops on window bar again">
    </div>
  </div>
  <p style="text-align:center; margin-top:2rem; font-size:0.9rem; color:var(--muted-text);" data-aos="fade-up">Add your own photos or embed videos by placing files in the <code>assets/images</code> or <code>assets/videos</code> directories and updating this page accordingly.</p>
</section>