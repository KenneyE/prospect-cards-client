import { emitter, mixpanelHelper, experimentDebugger} from '@marvelapp/react-ab-test'

mixpanelHelper.enable()
experimentDebugger.enable()

// Define variants in advance.
emitter.defineVariants('My Example', ['A', 'B', 'C'])

export default emitter
