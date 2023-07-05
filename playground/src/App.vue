<template>
  <div class="flex gap-5 flex-col d">
    <div>
      <p class="font-mono">
        color class: text-red-5 bg-[rgba(var(--un-color),0.7)]
      </p>
      <div class="w-20 h-10 grid place-items-center rounded-md text-red-5 bg-[rgba(var(--un-color),0.7)]">
        content
      </div>
    </div>

    <div>
      <p class="font-mono">
        color class: caret-green-600 text-[rgb(var(--un-caret-color))]
      </p>
      <textarea id="" name="" cols="30" rows="10" class="caret-green-600 text-[rgb(var(--un-caret-color))] p-3" />
    </div>

    <div class="w-20 h-10 rounded-md grid place-items-center bg-blue-5 ripple text-white">
      button
    </div>
    <div class="w-20 h-10 rounded-md grid place-items-center bg-red-5 ripple text-white">
      button
    </div>
  </div>
</template>

<style scoped>
.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: rgba(var(--un-bg-color), 1) radial-gradient(circle, transparent 1%, rgba(var(--un-bg-color), 1) 1%) center/15000%;
}
.ripple:active {
  background-color: rgba(var(--un-bg-color), 0.5);
  background-size: 100%;
  transition: background 0s;
}
</style>
