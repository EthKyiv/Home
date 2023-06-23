<script>
export default {
  props: {
    height: {
      type: Number,
      default: 730,
    },
    width: {
      type: Number,
      default: 407,
    },
  },
}
</script>
<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 407 730"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M199.867 0L7.34766 436.29L199.867 504.26L406.714 436.29L199.867 0Z"
      fill="url(#paint0_linear_251_35)"
    />
    <path
      d="M206.847 729.478L399.366 493.422L206.847 563.779L-0.000213623 493.422L206.847 729.478Z"
      fill="url(#paint1_linear_251_35)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_251_35"
        x1="7.34765"
        y1="476.154"
        x2="360.238"
        y2="476.154"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.071561" stop-color="#49D48E" />
        <stop offset="0.219552" stop-color="#3AD2DF" />
        <stop offset="0.324378" stop-color="#2ECEF8" />
        <stop offset="0.505208" stop-color="#43BCFF" />
        <stop offset="0.666667" stop-color="#5ACAF7" />
        <stop offset="0.744792" stop-color="#97CFBD" />
        <stop offset="0.911458" stop-color="#FFCF32" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_251_35"
        x1="399.366"
        y1="533.285"
        x2="46.4762"
        y2="533.285"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.071561" stop-color="#49D48E" />
        <stop offset="0.219552" stop-color="#3AD2DF" />
        <stop offset="0.324378" stop-color="#2ECEF8" />
        <stop offset="0.505208" stop-color="#43BCFF" />
        <stop offset="0.666667" stop-color="#5ACAF7" />
        <stop offset="0.744792" stop-color="#97CFBD" />
        <stop offset="0.911458" stop-color="#FFCF32" />
      </linearGradient>
    </defs>
  </svg>
</template>
