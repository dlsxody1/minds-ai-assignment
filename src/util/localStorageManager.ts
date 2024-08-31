export class LocalStorageManager {
  set(key: string, value: string) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`로컬스토리지 세팅 에러 발생 : ${error}`);
    }
  }

  get(key: string) {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error(`로컬스토리지 가져오는 상황에서 에러 발생: ${error}`);
      return null;
    }
  }

  delete(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`로컬스토리지 삭제하는데 에러 발생 : ${error}`);
    }
  }
}
