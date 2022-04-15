<template>
  <ShareNetwork
    :network="sharing.network"
    :style="{
      backgroundColor: sharing.color,
      margin: '0.2rem',
      padding: '0.2rem 0.5rem',
      borderRadius: '20%',
    }"
    :title="sharing.title"
    :url="sharing.url"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
  >
    <b-icon variant="white" :icon="sharing.icon" scale="1.4"></b-icon>
  </ShareNetwork>
</template>

<script>
export default {
  name: "SocialShared",
  props: {
    sharing: {
      type: Object,
      default: {
        title: "facebook",
        url: "https://news.vuejs.org/issues/180",
        quote: "Funko Mania",
        hashtags: "funko-mania",
        network: "facebook",
        name: "Facebook",
        color: "#00a4cd",
      },
    },
  },
};
</script>

<style></style>
