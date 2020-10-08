import { createConfirmation } from 'react-confirm'
import Confirmation from 'app/common/Confirmation'

// create confirm function
export const confirmation = createConfirmation(Confirmation)

const confirm: (text: string) => Promise<string> = (text) => {
  return confirmation({ text })
}

export default confirm
