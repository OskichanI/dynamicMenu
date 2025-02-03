class Storage {
    set = async (name,data) => {
        try {
          localStorage.setItem(name, data)
          return true
        } catch (e) {
          return false
        }
    }
    get = async(name) => {
        try {
            const data = localStorage.getItem(name)
            return data != null ? data : false
        } catch(e) {
            return false
        } 
    }
    del = async(name) => {
        localStorage.removeItem(name)
    }
}

export default new Storage()