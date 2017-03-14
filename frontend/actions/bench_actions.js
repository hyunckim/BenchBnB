export const RECEIVE_BENCHES = "RECEIVE_BENCHES";


const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});
