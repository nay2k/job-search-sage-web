<template>
  <header
    class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800"
  >
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between items-center">
        <!-- Logo and Mobile Menu Button -->
        <div class="flex items-center gap-4">
          <!-- Mobile menu button -->
          <UButton
            variant="ghost"
            color="gray"
            icon="i-heroicons-bars-3"
            class="lg:hidden"
            @click="toggleSidebar"
          />

          <!-- Logo -->
          <div class="flex items-center gap-2">
            <UIcon
              name="i-heroicons-briefcase"
              class="w-8 h-8 text-primary-500"
            />
            <span class="text-xl font-bold text-gray-900 dark:text-white"
              >JobSearchSage</span
            >
          </div>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-lg mx-8 hidden md:block">
          <UInput
            v-model="searchQuery"
            placeholder="Search jobs, companies, or contacts..."
            icon="i-heroicons-magnifying-glass"
            size="md"
            class="w-full"
          />
        </div>

        <!-- Right side actions -->
        <div class="flex items-center gap-3">
          <!-- Notifications -->
          <UButton
            variant="ghost"
            color="gray"
            icon="i-heroicons-bell"
            :badge="notificationCount > 0 ? notificationCount : undefined"
          />

          <!-- Theme Toggle -->
          <UButton
            variant="ghost"
            color="gray"
            :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            @click="toggleColorMode"
          />

          <!-- User Profile Dropdown -->
          <UDropdown
            :items="userMenuItems"
            :popper="{ placement: 'bottom-end' }"
          >
            <UAvatar
              :src="user?.avatar"
              :alt="user?.name"
              size="sm"
              class="cursor-pointer"
            />
          </UDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

// Mock user data - will be replaced with real auth store
const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://avatars.githubusercontent.com/u/739984?v=4',
});

const searchQuery = ref('');
const notificationCount = ref(3);

const userMenuItems = [
  [
    {
      label: 'Profile',
      icon: 'i-heroicons-user',
      click: () => navigateTo('/profile'),
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-6-tooth',
      click: () => navigateTo('/settings'),
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      click: () => {
        // Handle logout
        console.log('Logout clicked');
      },
    },
  ],
];

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

function toggleSidebar() {
  // Will implement sidebar toggle logic
  console.log('Toggle sidebar');
}
</script>
