<template>
  <UCard class="p-6">
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Quick Actions
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
        Common tasks to keep your job search moving
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <UButton
        v-for="action in quickActions"
        :key="action.label"
        :color="action.color"
        :variant="action.variant"
        size="lg"
        class="justify-start h-auto p-4"
        @click="action.onClick"
      >
        <template #leading>
          <UIcon :name="action.icon" class="w-5 h-5" />
        </template>
        <div class="text-left">
          <div class="font-medium">{{ action.label }}</div>
          <div class="text-xs opacity-75 mt-1">{{ action.description }}</div>
        </div>
      </UButton>
    </div>

    <!-- Upcoming Reminders -->
    <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
      <h4 class="text-sm font-medium text-gray-900 dark:text-white mb-3">
        Upcoming Reminders
      </h4>
      <div class="space-y-2">
        <UAlert
          v-for="reminder in upcomingReminders"
          :key="reminder.id"
          :color="reminder.color"
          variant="soft"
          :icon="reminder.icon"
          :title="reminder.title"
          :description="reminder.description"
        />
      </div>
    </div>
  </UCard>
</template>
<script setup>
const quickActions = ref([
  {
    label: 'Add New Job',
    description: 'Track a new application',
    icon: 'i-heroicons-plus-circle',
    color: 'primary',
    variant: 'solid',
    onClick: () => navigateTo('/pipeline?action=add'),
  },
  {
    label: 'Upload Resume',
    description: 'Update your documents',
    icon: 'i-heroicons-document-arrow-up',
    color: 'gray',
    variant: 'soft',
    onClick: () => navigateTo('/documents/resumes?action=upload'),
  },
  {
    label: 'Chat with AI Coach',
    description: 'Get strategic advice',
    icon: 'i-heroicons-chat-bubble-left-right',
    color: 'purple',
    variant: 'soft',
    onClick: () => navigateTo('/chat'),
  },
  {
    label: 'Generate Cover Letter',
    description: 'Create tailored content',
    icon: 'i-heroicons-document-text',
    color: 'green',
    variant: 'soft',
    onClick: () => navigateTo('/documents/cover-letters?action=generate'),
  },
]);

const upcomingReminders = ref([
  {
    id: 1,
    title: 'Follow up with TechCorp',
    description: 'Application submitted 3 days ago',
    color: 'orange',
    icon: 'i-heroicons-clock',
  },
  {
    id: 2,
    title: 'Interview preparation',
    description: 'StartupXYZ interview tomorrow',
    color: 'blue',
    icon: 'i-heroicons-calendar-days',
  },
]);
</script>
