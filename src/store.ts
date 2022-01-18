export const store = {
    navigation: [],

    addNavigation (depth,name)  {
        // Close menu if you clic when it's open
        if (this.navigation[depth] === name) {
            this.navigation.splice(depth, this.navigation.length - depth);
            return
        }

        if (depth === 0) {
                this.navigation.splice(0, this.navigation.length, name);
            }
            if (depth === 1) {
                if (this.navigation[1]) {
                   this.navigation.splice(1, 1, name);
                } else {
                   this.navigation.push(name)
                }
            }
            if (depth === 2) {
                if (this.navigation[2]) {
                   this.navigation.splice(2, 1, name);
                } else {
                   this.navigation.push(name)
                }
            }
}}
