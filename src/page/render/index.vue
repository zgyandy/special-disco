<script>
export default {
  props: {
    arr: {
      type: Array,
      default: [{title: ' 无所不能的render函数', name: 1}]
    }
  },
  data () {
    return {
      arr: [{title: '1212', name: 'kenna'}]
    }
  },
  functional: true,
  render(h, { props }) {
    return props.arr.map(route =>
      <div key={route.name}>
          {route.title}
      </div>
    )
  }
}
</script>
