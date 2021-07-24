<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <!-- <p
        v-for="(task , key) in tasks"
        :key="key"
      >
        {{key}} {{task}}
      </p> -->
      <task
        v-for="(task , key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      >
      </task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="lg"
        icon="add"
        @click="showAddTask=true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task></add-task>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageTodo',
  data () {
    return {
      showAddTask: false
    }
  },
  components: {
    task: require('components/Tasks/Task.vue').default,
    AddTask: require('components/Tasks/modals/AddTask.vue').default
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/tasks'
    })
  },
  created () {

  }
}
</script>

<style scoped>
</style>
