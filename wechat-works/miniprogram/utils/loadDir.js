
export default function loadDir(path){
  const requireContext  = require('require-context')
   return requireContext(path)
}