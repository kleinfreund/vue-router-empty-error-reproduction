<template>
  <main>
    <h1>Hello, World!</h1>

    <RouterLink :to="{ name: 'existing-route' }">Existing</RouterLink>
    <RouterLink :to="{ name: 'non-existing-route' }">Non-existing</RouterLink>

    <RouterView />
  </main>
</template>
