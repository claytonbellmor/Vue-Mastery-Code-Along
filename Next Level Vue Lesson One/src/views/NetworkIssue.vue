<template>
  <div>
    <h1>Uh-oh!</h1>
    <p>It looks like you're experiencing some network issues, please click to go back to the homepage.</p>
    <router-link :to=" { name: 'event-list' } ">Homepage</router-link>
  </div>
</template>
