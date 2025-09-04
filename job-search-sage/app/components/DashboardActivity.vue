<template>
  <UCard class="p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Recent Activity
      </h3>
      <UButton variant="ghost" color="gray" size="sm" to="/activity">
        View All
      </UButton>
    </div>

    <div class="space-y-4">
      <div
        v-for="activity in recentActivities"
        :key="activity.id"
        class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div :class="['p-2 rounded-full flex-shrink-0', activity.bgColor]">
          <UIcon
            :name="activity.icon"
            :class="['w-4 h-4', activity.iconColor]"
          />
        </div>

        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 dark:text-white">
            {{ activity.title }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {{ activity.description }}
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
            {{ activity.time }}
          </p>
        </div>

        <UBadge
          v-if="activity.status"
          :color="activity.statusColor"
          variant="soft"
          size="xs"
        >
          {{ activity.status }}
        </UBadge>
      </div>
    </div>

    <!-- Empty state -->
    <div v-if="recentActivities.length === 0" class="text-center py-8">
      <UIcon
        name="i-heroicons-clock"
        class="w-12 h-12 text-gray-400 dark:text-gray-600 mx-auto mb-3"
      />
      <p class="text-gray-500 dark:text-gray-400">
        No recent activity. Start by adding a job application!
      </p>
    </div>
  </UCard>
</template>

<script setup>
// Mock activity data - will be replaced with real data from stores
const recentActivities = ref([
  {
    id: 1,
    title: 'Applied to Software Engineer at TechCorp',
    description: 'Submitted tailored resume and cover letter',
    time: '2 hours ago',
    icon: 'i-heroicons-document-arrow-up',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    status: 'Applied',
    statusColor: 'blue',
  },
  {
    id: 2,
    title: 'Interview scheduled with StartupXYZ',
    description: 'Phone screening on Friday at 2:00 PM',
    time: '1 day ago',
    icon: 'i-heroicons-calendar-days',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    iconColor: 'text-green-600 dark:text-green-400',
    status: 'Interview',
    statusColor: 'green',
  },
  {
    id: 3,
    title: 'Follow-up sent to DataCorp',
    description: 'Sent thank you email after interview',
    time: '2 days ago',
    icon: 'i-heroicons-envelope',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    status: 'Follow-up',
    statusColor: 'purple',
  },
  {
    id: 4,
    title: 'Resume updated',
    description: 'Added new project and skills section',
    time: '3 days ago',
    icon: 'i-heroicons-document-text',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    iconColor: 'text-orange-600 dark:text-orange-400',
  },
]);
</script>
