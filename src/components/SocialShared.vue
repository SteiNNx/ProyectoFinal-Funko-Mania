<template>
  <ShareNetwork
    :network="sharing.network"
    :style="{
      backgroundColor: sharing.color,
      margin: '0.2rem',
      padding: '0.4rem 0.5rem',
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
        title: {
          type: String,
          default: "facebook",
        },
        url: {
          type: String,
          default: "https://news.vuejs.org/issues/180",
        },
        quote: {
          type: String,
          default: "Funko Mania",
        },
        hashtags: {
          type: String,
          default: "funko-mania",
        },
        network: {
          type: String,
          default: "facebook",
        },
        name: {
          type: String,
          default: "Facebook",
        },
        color: {
          type: String,
          default: "#00a4cd",
        },
      },
    },
  },
};
</script>

<style></style>
