<template>
  <div id="home-page">

    <main role="main">
      <homepage-carousel />
      <div class="container marketing">
        <homepage-heading />
      </div>
      <homepage-feature />
    </main>

    <homepage-footer />

  </div>
</template>

<script>
import HomepageCarousel from '@Components/Homepage/Carousel'
import HomepageFeature  from '@Components/Homepage/Feature' 
import HomepageFooter   from '@Components/Homepage/Footer'
import HomepageHeader   from '@Components/Homepage/Header'
import HomepageHeading  from '@Components/Homepage/Heading'

export default {
  components: { HomepageCarousel, HomepageFeature, HomepageFooter, HomepageHeader, HomepageHeading }
}
</script>

<style>

</style>
