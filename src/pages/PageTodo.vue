<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <q-item
        v-for="task in tasks"
        :key="task.id"
        tag="label"
        :class="task.completed? 'bg-green-1' : 'bg-orange-1'"
        clickable
        v-ripple
      >
        <q-item-section
          side
          top
        >
          <q-checkbox v-model="task.completed" />
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>

export default {
  name: 'PageTodo',
  data () {
    return {
      tasks: [
        { id: 1, name: 'Go to shop', completed: false, dueDate: '2019/05/05', dueTime: '18:30' },
        { id: 2, name: 'Go to shop', completed: false, dueDate: '2019/05/05', dueTime: '18:30' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
