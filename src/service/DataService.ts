import axios from "axios";

class DataServiceClass {
  $data: any;

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
          .get('./dataTree.json')
          .then((response) => {
            this.$data = response.data;
            resolve(this.$data);
          })
    });
  }

  loadCRI(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get("./fichesCRI.json")
        .then(response => {
          resolve(response.data);
        })
    });
  }

  loadSearch(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get("./dataFlat.json")
        .then(response => {
          this.$data = response.data;
          resolve(this.$data);
        })
    });
  }
}

export default new DataServiceClass();
