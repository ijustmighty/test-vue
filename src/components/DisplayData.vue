<template>
	<div>
		<h2>Отображение данных</h2>
		<pre>{{ jsonData }}</pre>
	</div>
</template>

<script>
export default {
  data() {
    return {
      jsonData: null,
    };
  },
  created() {
    // Подписываемся на событие изменения данных в хранилище
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'setFormData') {
        // Обновляем данные при изменении в хранилище
        this.jsonData = this.$store.getters.getFormData;
      }
    });
  },
};
</script>

