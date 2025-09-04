<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="border-b border-gray-200 dark:border-gray-800 pb-4">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
        Dashboard
      </h1>
      <p class="text-gray-600 dark:text-gray-400 mt-1">
        Welcome back! Here's your job search progress.
      </p>
    </div>

    <!-- Stats Cards -->
    <DashboardStats />

    <!-- Main Dashboard Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Activity -->
      <DashboardActivity />

      <!-- Quick Actions & Shortcuts -->
      <DashboardQuickActions />
    </div>

    <!-- Pipeline Overview -->
    <DashboardPipelineOverview />
  </div>
</template>

<script setup>
// Set page meta
definePageMeta({
  title: 'Dashboard - JobSearchSage',
});

// Set page head
useHead({
  title: 'Dashboard - JobSearchSage',
});
</script>
