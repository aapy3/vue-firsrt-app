<template>
  <button
  @click="onClick"
  @dblclick="onDoubleClick"
  :class="[
   'hello-world-button',
   'hello-world-button--' + color,
   'hello-world-button--' + size,
   {
    'hello-world-button--rounded': rounded
   }
  ]"
 >
  <slot></slot>
 </button>
</template>

<script>
export default {
  name: 'HelloWorld',
 props: {
  color: {
   type: String,
   default: "blue",
   validator(x) {
     return ["blue", "green", "red"].indexOf(x) !== -1;
   }
  },
  rounded: {
   type: Boolean,
   default: true
  },
  size: {
   type: String,
   default: "default",
   validator(x) {
    return ["small", "default", "large"].indexOf(x) !== -1;
   }
  },
 },

 methods: {
  onClick(event) {
   this.$emit("click", event);
  },

  onDoubleClick(event) {
   this.$emit("dblclick", event);
  },
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-world-button {
 display: inline-block;
 outline: 0;
 border: 1px solid rgba(0, 0, 0, 0.1);
 color: #ffffff;
 font-weight: 500;
 font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
 user-select: none;
 cursor: pointer;
}

/* --> COLORS <-- */

.hello-world-button--blue {
 background-color: #0194ef;
}

.hello-world-button--green {
 background-color: #1bb934;
}

.hello-world-button--red {
 background-color: #e1112c;
}

/* --> SIZES <-- */

.hello-world-button--small {
 padding: 8px 10px;
 border-radius: 4px;
 font-size: 12px;
 line-height: 12px;
}

.hello-world-button--default {
 padding: 12px 14px;
 border-radius: 6px;
 font-size: 14px;
 line-height: 16px;
}

.hello-world-button--large {
 padding: 16px 18px;
 border-radius: 8px;
 font-size: 16px;
 line-height: 20px;
} 

/* --> BOOLEANS <-- */

.hello-world-button--rounded {
 border-radius: 60px;
}
</style>
