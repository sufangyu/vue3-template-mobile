/** 上下留白的间距 */
import { defineComponent, PropType } from 'vue';
import './index.scss';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export default defineComponent({
  props: {
    size: {
      type: String as PropType<Size>,
      default: 'md',
      validator: (value: Size) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={['whitespace', `whitespace-${props.size}`]}>{slots.default?.()}</div>
    );
  },
});
