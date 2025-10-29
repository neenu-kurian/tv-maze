<template>
  <div class="flex align-middle flex-col text-center gap-1 p-1">
    <div
      class="w-[130px] items-center h-[130px] rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm"
    >
      <AppImage :src="member.person.image?.original" :alt="member.person.name">
        <template #fallback>
          <div role="img" :aria-label="`No image available for ${member.person.name}`">
            <UserIcon />
          </div>
        </template>
      </AppImage>
    </div>
    <div>
      <div>{{ member.person.name }}</div>
      <div class="text-gray-500 text-[0.8rem]">{{ member.character.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline';
import AppImage from './AppImage.vue';
import type { CastMember } from '@/types/index.ts';

defineProps<{
  member: CastMember;
}>();
</script>
