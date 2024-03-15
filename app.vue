<script setup>

const styles = ref([200, 300])
const specialStyle = computed(() => {
  if (styles.value[0] > 900) {
    styles.value[0] = styles.value[0] % 900
  }
  if (styles.value[0] < 0) {
    styles.value[0] = 800
  }
  if (styles.value[1] > 1800) {
    styles.value[1] = styles.value[1] % 1800
  }
  if (styles.value[1] < 0) {
    styles.value[1] = 1700
  }

  return {
    top: String(styles.value[0])+'px',
    left: String(styles.value[1]+'px')
  }

})
const move = () => {
  let param = Math.floor(Math.random() * 2);
  // console.log(param)
  styles.value[param] += 200
}
const answer = ref('я знал')
const answerStyle = ref({
    'opacity': '0',
  })
const moveTop = () => styles.value[0] -= 40
const moveDown = () => styles.value[0] += 40
const moveLeft = () => styles.value[1] += 40
const moveRight = () => styles.value[1] -= 40
const answerYes = () => console.log('hello')
</script>
<template>
  <div>
    <div class="main">
      <div class="text">ты Гей?</div>
      <div
          :style="answerStyle"
          class="answer">
        {{answer}}
      </div>
      <div
          class="btn yes"
          @click="answerYes"
      >да
      </div>
      <div
          class="btn no"
          :style="specialStyle"
          @mouseenter="move"
      >нет
        <div
            @mouseenter="moveDown"
            class="top"></div>
        <div
            @mouseenter="moveTop"
            class="bottom"></div>
        <div
            @mouseenter="moveLeft"
            class="left"></div>
        <div
            @mouseenter="moveRight"
            class="right"></div>

      </div>
    </div>
  </div>а 
</template>
<style>
.main {
  background: yellow;
  width: 1800px;
  height: 900px;
  position: relative;
}

.btn {
  width: 80px;
  height: 80px;
  background: green;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 32px;
}

.yes {
  position: absolute;
  top: 200px;
  right: 300px;
}
.no {
  position: absolute;
}
.text {
  position: absolute;
  top: 150px;
  left: 850px;
  background: aqua;
  height: 40px;
  width: 150px;
  font-size: 30px;
  text-align: center;
}
.answer {
  position: absolute;
  top: 200px;
  left: 850px;
  background: blue;
  height: 40px;
  width: 150px;
  font-size: 30px;
  text-align: center;
}
.top {
  width: 120px;
  height: 30px;
  position: absolute;
  background: gold;
  top: -40px;
  left: -20px;
}
.bottom {
  width: 120px;
  height: 30px;
  position: absolute;
  background: gray;
  bottom: -40px;
  left: -20px;
}
.left {
  height: 120px;
  width: 30px;
  position: absolute;
  background: green;
  bottom: -20px;
  left: -40px;
}
.right {
  height: 120px;
  width: 30px;
  position: absolute;
  background: blue;
  bottom: -20px;
  right: -40px;
}

</style>
