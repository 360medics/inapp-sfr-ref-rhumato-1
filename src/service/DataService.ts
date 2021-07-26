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
          .catch((e) => {
            console.log(e);
            reject(e);
          });
    });
  }

  loadCRI(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get("./fichesCRI.json")
        .then(response => {
          resolve(response.data);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
    });
  }

  loadSearch(): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .get("./dataFlat.json")
        .then(response => {
          this.$data = response.data;
          resolve(JSON.parse(this.$data));
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
    });
  }
}

export default new DataServiceClass();
