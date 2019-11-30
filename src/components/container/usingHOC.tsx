
import { createComponent } from '@vue/composition-api'
import useDataFetchingHOC from '../presentational/hoc-component'

const dataSourceUrl = "https://jsonplaceholder.typicode.com/users";

const ContentSite = createComponent({
    setup() {
      return () => (
        <div className="content">
          <p>Yes, i'm in HOC</p>
        </div>
      )
    }
  })

export default useDataFetchingHOC(ContentSite)(dataSourceUrl)
