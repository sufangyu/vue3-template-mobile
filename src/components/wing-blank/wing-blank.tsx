import { defineComponent, PropType } from 'vue';
import './index.scss';

type Size = 'sm' | 'md' | 'lg';

export default defineComponent({
  name: 'WingBlank',
  props: {
    /** 可选sm, md, lg */
    size: {
      type: String as PropType<Size>,
      default: 'lg',
      validator: (value: Size) => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={['wingblank', `wingblank-${props.size}`]}>{slots.default?.()}</div>
    );
  },
});
