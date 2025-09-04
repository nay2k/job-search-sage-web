<template>
  <aside
    class="fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 lg:block hidden"
  >
    <div class="flex flex-col h-full">
      <!-- Sidebar Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2
          class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide"
        >
          Navigation
        </h2>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <UVerticalNavigation :links="navigationLinks" />
      </nav>

      <!-- Quick Actions -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-800">
        <div class="space-y-2">
          <UButton
            color="primary"
            variant="solid"
            size="sm"
            icon="i-heroicons-plus"
            class="w-full justify-center"
            @click="addJob"
          >
            Add Job
          </UButton>

          <UButton
            color="gray"
            variant="soft"
            size="sm"
            icon="i-heroicons-document-arrow-up"
            class="w-full justify-center"
            @click="uploadResume"
          >
            Upload Resume
          </UButton>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const route = useRoute();

const navigationLinks = computed(() => [
  {
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/',
    active: route.path === '/',
  },
  {
    label: 'Job Pipeline',
    icon: 'i-heroicons-clipboard-document-list',
    to: '/pipeline',
    active: route.path.startsWith('/pipeline'),
  },
  {
    label: 'Documents',
    icon: 'i-heroicons-document-text',
    to: '/documents',
    active: route.path.startsWith('/documents'),
    children: [
      {
        label: 'Resumes',
        to: '/documents/resumes',
      },
      {
        label: 'Cover Letters',
        to: '/documents/cover-letters',
      },
    ],
  },
  {
    label: 'AI Coach',
    icon: 'i-heroicons-chat-bubble-left-right',
    to: '/chat',
    active: route.path.startsWith('/chat'),
  },
  {
    label: 'Communications',
    icon: 'i-heroicons-envelope',
    to: '/communications',
    active: route.path.startsWith('/communications'),
  },
  {
    label: 'Analytics',
    icon: 'i-heroicons-chart-bar',
    to: '/analytics',
    active: route.path.startsWith('/analytics'),
  },
]);

function addJob() {
  // Will implement add job modal
  console.log('Add job clicked');
}

function uploadResume() {
  // Will implement resume upload
  console.log('Upload resume clicked');
}
</script>
