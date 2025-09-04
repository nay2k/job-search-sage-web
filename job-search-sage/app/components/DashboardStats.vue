<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <UCard v-for="stat in stats" :key="stat.label" class="p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </p>
          <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {{ stat.value }}
          </p>
          <div class="flex items-center mt-2">
            <UIcon
              :name="
                stat.trend === 'up'
                  ? 'i-heroicons-arrow-trending-up'
                  : 'i-heroicons-arrow-trending-down'
              "
              :class="[
                'w-4 h-4 mr-1',
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500',
              ]"
            />
            <span
              :class="[
                'text-sm font-medium',
                stat.trend === 'up'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400',
              ]"
            >
              {{ stat.change }}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">
              vs last month
            </span>
          </div>
        </div>
        <div :class="['p-3 rounded-full', stat.bgColor]">
          <UIcon :name="stat.icon" :class="['w-6 h-6', stat.iconColor]" />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
// Mock stats data - will be replaced with real data from stores
const stats = ref([
  {
    label: 'Total Applications',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: 'i-heroicons-document-text',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    label: 'Response Rate',
    value: '18%',
    change: '+3%',
    trend: 'up',
    icon: 'i-heroicons-chat-bubble-left-ellipsis',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    label: 'Interviews Scheduled',
    value: '4',
    change: '+2',
    trend: 'up',
    icon: 'i-heroicons-calendar-days',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    label: 'Pending Follow-ups',
    value: '7',
    change: '-2',
    trend: 'down',
    icon: 'i-heroicons-clock',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
]);
</script>
