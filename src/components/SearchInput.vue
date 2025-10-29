<template>
  <div
    role="search"
    class="flex align-center gap-6 rounded-md border-transparent px-4 py-2 md:w-[60%] max-w-full bg-gray-100 width-full"
  >
    <slot name="icon">
      <MagnifyingGlassIcon class="w-8 h-8 flex-none basis-5" />
    </slot>
    <input
      :value="modelValue"
      name="search-input"
      type="search"
      autocomplete="off"
      aria-label="Search shows"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @keydown.enter="emit('enter', $event)"
      :placeholder="placeholder"
      class="border-none outline-none bg-transparent w-full text-base text-gray-900 p-0 leading-none"
    />
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import type { SearchInputProps } from '@/types/index.ts';

withDefaults(defineProps<SearchInputProps>(), {
  modelValue: '',
  placeholder: 'Search for TV shows...',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  enter: [event: Event];
}>();
</script>
