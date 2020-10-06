import { createConfirmation } from 'react-confirm'
import Confirmation from 'app/common/Confirmation'

// create confirm function
export const confirmation = createConfirmation(Confirmation)

// This is optional. But wrapping function makes it easy to use.
const confirm: (confirmation: string) => Promise<string> = (text) => {
  return confirmation({ text })
}

export default confirm
