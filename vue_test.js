<html>
<body>
	
import { createApp, ref } from 'vue'

createApp ( {
	setup() {
		return {
			count: ref(0)
		}
	}
}),mount('#app')

<div id="app">
	<button @click="count++">
		Cout is: {{count}}
	</button>
</div>

</body>
</html>