import { UserAddressRecord } from "../store";

export const formatAddress = (address: UserAddressRecord) => {
  const addressNodes: string[] = [];

  if (address.region) {
    addressNodes.push(address.region.name);
  }
  addressNodes.push(address.address);
  if (address.house) {
    addressNodes.push(`д. ${address.house}`);
  }
  if (address.apt) {
    addressNodes.push(`кв: ${address.apt}`);
  }

  const addressStr = addressNodes.join(", ");

  return addressStr;
};
