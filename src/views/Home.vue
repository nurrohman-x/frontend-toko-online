<template>
  <div class="home">
    <HeaderShyna />
    <HeroShyna />
    <BannerShyna />
    <InstagramShyna />
    <ParthnerShyna />
    <FooterShyna />
  </div>
</template>

<script>
import HeaderShyna from '@/components/HeaderShyna.vue';
import HeroShyna from '@/components/HeroShyna.vue';
import BannerShyna from '@/components/BannerShyna.vue';
import InstagramShyna from '@/components/InstagramShyna.vue';
import ParthnerShyna from '@/components/ParthnerShyna.vue';
import FooterShyna from '@/components/FooterShyna.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderShyna,
    HeroShyna,
    BannerShyna,
    InstagramShyna,
    ParthnerShyna,
    FooterShyna
  }
}
</script>
