<template>
  <div class="p-8">
    <ImportantMessage
      title="Example title"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      dismissButton="Dismiss"
      button="Action"
      :type="messageType"
      @message-dismiss="showAlert('dismiss')"
      @message-action="showAlert('action')"
    />
    <div class="my-8 flex justify-around">
      <button
        @click="messageType = 'success'"
        class="btn btn-small btn-success"
      >
        Success
      </button>
      <button @click="messageType = 'danger'" class="btn btn-small btn-danger">
        Danger
      </button>
      <button @click="messageType = 'info'" class="btn btn-small btn-info">
        Info
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const messageType = ref('info');
const showAlert = (message: string) => {
  window.alert(message);
};
</script>
