<script>
export default {
  mounted() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    const isLowPerformance = checkIsLowPerformance()
    const enableAnimation = true

    const mouseLight = document.querySelector('#mouseLight')
    const nuxtImg = document.querySelector('#nuxtImg')

    // const animationToggle = window.document.getElementById('animation-toggle')
    const body = document.querySelector('body')
    let bodyRect

    function checkIsLowPerformance() {
      return (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        navigator.hardwareConcurrency < 2 ||
        navigator.deviceMemory < 1 ||
        // Safari has some performance issue on the blur filter. Remove this when it's fixed.
        isSafari
      )
    }
    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(
        Math.sqrt(
          Math.pow(mouseX - (elem.x + elem.width / 2), 2) +
            Math.pow(mouseY - (elem.top + window.scrollY + elem.height / 2), 2)
        )
      )
    }

    function onFocusOut() {
      if (!enableAnimation) {
        return
      }
      mouseLight.style.opacity = 0
    }
    function onMouseMove(e) {
      if (!enableAnimation) {
        return
      }

      const pointerRect = nuxtImg.getBoundingClientRect()
      if (!bodyRect) {
        bodyRect = body.getBoundingClientRect()
      }
      const distance = calculateDistance(pointerRect, e.pageX, e.pageY)
      const size = Math.max((1000 - distance) / 2 / 100, 1)
      mouseLight.style.top = `${
        e.clientY - bodyRect.y - mouseLight.clientHeight / 2
      }px`
      mouseLight.style.left = `${e.clientX - mouseLight.clientWidth / 2}px`
      mouseLight.style.width = mouseLight.style.height = `${Math.max(
        Math.round(size * 40),
        200
      )}px`
      mouseLight.style.filter = `blur(${Math.min(
        Math.max(size * 20, 80),
        120
      )}px)`
      mouseLight.style.opacity = Math.min(Math.max(size / 2, 1), 0.8)

      mouseLight.style.top = `${
        e.clientY - bodyRect.y - mouseLight.clientHeight / 2
      }px`
      mouseLight.style.left = `${e.clientX - mouseLight.clientWidth / 2}px`
      mouseLight.style.width = mouseLight.style.height = `${Math.max(
        Math.round(size * 50),
        200
      )}px`
      mouseLight.style.filter = `blur(${Math.min(
        Math.max(size * 50, 80),
        120
      )}px)`
      mouseLight.style.opacity = Math.min(Math.max(size / 2, 1), 0.8)

      const dx = e.pageX - pointerRect.left
      const dy = e.pageY - pointerRect.top
    }

    // document.animationContainer.classList.toggle('visual-effects', true)
    body.addEventListener('mousemove', onMouseMove, { passive: true })
    body.addEventListener('mouseleave', onFocusOut, { passive: true })
  },
}
</script>
<template>
  <div
    id="animationContainer"
    class="visual-effects overflow-hidden min-h-full min-w-full flex flex-col justify-center items-center text-center"
  >
    <div class="mouse-light-container">
      <div
        id="mouseLight"
        class="absolute top-0 rounded-full mouse-gradient transition-opacity h-[200px] w-[200px]"
      ></div>
    </div>
    <div id="nuxtImg"></div>
  </div>
</template>
<style scoped>
#animationContainer {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.visual-effects .mouse-gradient {
  background: repeating-linear-gradient(
    to right,
    #c3ff00 0%,
    #d9ff03 50%,
    #04b7cbd5 100%
  );
  filter: blur(100px);
  opacity: 1;
}

.transition-opacity {
  -webkit-transition-property: opacity;
  -o-transition-property: opacity;
  transition-property: opacity;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transition-duration: 0.15s;
  -o-transition-duration: 0.15s;
  transition-duration: 0.15s;
}
</style>
