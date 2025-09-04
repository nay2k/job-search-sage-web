<template>
  <UCard class="p-6">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Pipeline Overview
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Track your applications through each stage
        </p>
      </div>
      <UButton variant="ghost" color="gray" size="sm" to="/pipeline">
        View Pipeline
      </UButton>
    </div>

    <!-- Pipeline Stages -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        v-for="stage in pipelineStages"
        :key="stage.name"
        class="text-center"
      >
        <div :class="['p-3 rounded-full mx-auto mb-2 w-fit', stage.bgColor]">
          <UIcon :name="stage.icon" :class="['w-5 h-5', stage.iconColor]" />
        </div>
        <div class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ stage.count }}
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          {{ stage.name }}
        </div>
      </div>
    </div>

    <!-- Quick Navigation Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <UCard
        v-for="feature in quickNavigation"
        :key="feature.title"
        class="p-4 hover:shadow-md transition-shadow cursor-pointer"
        @click="navigateTo(feature.to)"
      >
        <div class="flex items-start gap-3">
          <div :class="['p-2 rounded-lg flex-shrink-0', feature.bgColor]">
            <UIcon
              :name="feature.icon"
              :class="['w-5 h-5', feature.iconColor]"
            />
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-gray-900 dark:text-white">
              {{ feature.title }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {{ feature.description }}
            </p>
            <div class="flex items-center mt-2">
              <UBadge :color="feature.badgeColor" variant="soft" size="xs">
                {{ feature.badge }}
              </UBadge>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </UCard>
</template>

<script setup>
// Mock pipeline data - will be replaced with real data from stores
const pipelineStages = ref([
  {
    name: 'Applied',
    count: 12,
    icon: 'i-heroicons-document-arrow-up',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    name: 'Screening',
    count: 5,
    icon: 'i-heroicons-phone',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
    iconColor: 'text-yellow-600 dark:text-yellow-400',
  },
  {
    name: 'Interview',
    count: 3,
    icon: 'i-heroicons-calendar-days',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    name: 'Offer',
    count: 1,
    icon: 'i-heroicons-trophy',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
]);

const quickNavigation = ref([
  {
    title: 'Job Pipeline',
    description: 'Manage applications and track progress',
    icon: 'i-heroicons-clipboard-document-list',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    badge: '24 active',
    badgeColor: 'blue',
    to: '/pipeline',
  },
  {
    title: 'AI Chat Coach',
    description: 'Get personalized job search advice',
    icon: 'i-heroicons-chat-bubble-left-right',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    badge: 'Available',
    badgeColor: 'purple',
    to: '/chat',
  },
  {
    title: 'Documents',
    description: 'Manage resumes and cover letters',
    icon: 'i-heroicons-document-text',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    iconColor: 'text-green-600 dark:text-green-400',
    badge: '8 files',
    badgeColor: 'green',
    to: '/documents',
  },
]);
</script>
