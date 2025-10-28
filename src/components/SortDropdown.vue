<template>
  <div class="relative inline-flex items-center bg-gray-100 rounded-lg px-3 md:min-w-[200px]">
    <select
      :value="modelValue"
      name="select-sort"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="appearance-none bg-transparent border-none py-2.5 text-sm text-gray-900 w-full cursor-pointer font-medium"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <ChevronDownIcon
      aria-hidden="true"
      class="w-4 h-4 text-gray-500 ml-2 shrink-0 pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import type { SortDropdownProps } from '@/types/index.ts';

withDefaults(defineProps<SortDropdownProps>(), {
  modelValue: 'rating-desc',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>
