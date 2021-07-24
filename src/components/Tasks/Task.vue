<template>
  <q-item
    @click="updateTask({id: id, updates: {completed: !task.completed}})"
    :class="task.completed? 'bg-orange-1' : 'bg-green-1'"
    v-ripple
    clickable
  >
    <q-item-section
      side
      top
    >
      <q-icon
        color="primary"
        v-if="task.completed"
        size="md"
        name="task_alt"
      />
      <q-icon
        color="secondary"
        v-else
        size="md"
        name="radio_button_unchecked"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{'text-strike': task.completed}">{{task?.name}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon
            size="18px"
            name="event"
            class="q-mr-xs"
          />
        </div>

        <div class="column">
          <q-item-label
            caption
            class="row justify-end"
          >{{task?.dueDate}}</q-item-label>
          <q-item-label
            caption
            class="row justify-end"
          >{{task?.dueTime}}</q-item-label>
        </div>
      </div>

    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        color="red"
        icon="delete_outline"
        @click.stop="promptToDelete(id)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  props: ['task', 'id'],

  methods: {
    ...mapActions({
      updateTask: 'tasks/updateTask',
      deleteTask: 'tasks/deleteTask'
    }),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      }).onCancel(() => {
        console.log('>>>> Cancel')
      })
    }
  }

}
</script>
