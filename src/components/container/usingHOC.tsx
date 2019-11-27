
import { createComponent } from '@vue/composition-api'
import useDataFetchHOC from '../presentational/hoc-component'

const ContainerComponent = createComponent({
    setup() {
      return () => (
        <div>
          <p>This is component using HOC</p>
        </div>
      )
    }
  })

export default useDataFetchHOC(ContainerComponent)("https://jsonplaceholder.typicode.com/users")
