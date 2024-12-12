<template>
  <div
    data-component="ImportantMessage.vue"
    class="p-3"
    :class="typeClass.container"
  >
    <div class="container mx-auto">
      <div class="lg:flex items-center">
        <div class="flex mr-auto">
          <div
            class="leading-snug flex flex-col lg:block mr-1"
            :class="typeClass.text"
          >
            <span class="font-bold text-sm lg:text-base mr-1">
              <slot name="title"> {{ title }} </slot>
            </span>

            <span class="mt-1 text-xs lg:text-base">
              <slot name="message">
                {{ message }}
              </slot>
            </span>
          </div>
        </div>
        <div
          class="text-right flex mt-4 lg:mt-0 lg:flex-row-reverse whitespace-nowrap"
        >
          <button
            v-if="dismissButton"
            class="btn btn-small text-sm w-full"
            :class="typeClass.text"
            @click="$emit('message-dismiss')"
          >
            {{ dismissButton }}
          </button>
          <button
            v-if="button"
            class="btn btn-small text-sm w-full"
            :class="typeClass.button"
            @click="$emit('message-action')"
          >
            {{ button }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImportantMessage',
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    dismissButton: { type: String, default: '' },
    button: { type: String, default: '' },
    type: { type: String, default: 'info' },
  },
  emits: ['message-dismiss', 'message-action'],
  data() {
    return {
      typeClass: {
        icon: 'notification-info',
        container: 'bg-info-50 border-info',
        text: 'text-info',
        button: 'btn-info',
      },
    };
  },
  watch: {
    type() {
      this.typeClass = this.getTypeClass();
    },
  },
  methods: {
    getTypeClass() {
      switch (this.type) {
        case 'success':
          return {
            container: 'bg-success-50 border-success',
            text: 'text-success',
            button: 'btn-success',
          };
        case 'danger':
          return {
            container: 'bg-danger-50 border-danger',
            text: 'text-danger',
            button: 'btn-danger',
          };
        case 'info':
        default:
          return {
            container: 'bg-info-50 border-info',
            text: 'text-info',
            button: 'btn-info',
          };
      }
    },
  },
});
</script>
