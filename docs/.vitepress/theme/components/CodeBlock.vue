<template>
  <div class="custom-code-block">
    <div class="code-header">
      <span class="window-buttons">
        <span class="button close"></span>
        <span class="button minimize"></span>
        <span class="button maximize"></span>
      </span>
      <span class="file-name">{{ fileName }}</span>
    </div>
    <div class="code-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      default: 'code.txt'
    }
  }
}
</script>

<style scoped>
.custom-code-block {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: var(--code-bg-color);
  border: 1px solid #333;
}

.code-header {
  background: #2d2d2d;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #333;
}

.window-buttons {
  display: flex;
  gap: 8px;
  margin-right: 16px;
}

.button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.close { background: #ff5f56; }
.minimize { background: #ffbd2e; }
.maximize { background: #27c93f; }

.file-name {
  color: #999;
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
}

.code-content {
  padding: 16px;
}
</style>