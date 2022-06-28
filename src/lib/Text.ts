import { color } from '../color'

export enum Status {
  failed,
  success,
}

function displayActionText(text: string, isSuccess: Status = Status.success) {
  if (isSuccess === Status.success) {
    return color.green + 'Success: ' + text + color.red
  }

  return color.red + 'Failed: ' + text + color.red
}

function displaySuccess(text: string): void {
  console.log(color.green + 'Success: ' + text + color.red)
}

function displayFailed(text: string): void {
  console.log(color.red + 'Failure: ' + text + color.red)
}

export { displayActionText, displaySuccess, displayFailed }
