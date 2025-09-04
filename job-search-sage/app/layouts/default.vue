<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content Area -->
    <div class="flex">
      <!-- Sidebar -->
      <AppSidebar />

      <!-- Main Content -->
      <main class="flex-1 lg:pl-72">
        <div class="px-4 py-6 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// Layout will automatically use components from ~/components
</script>
