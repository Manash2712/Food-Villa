/**
 * 
 * This for below reasons :-
 * Re-Usable
 * Readable
 * Testable - can write separate test cases for this
 * Maintainable - easy to debug
 * Modularity - broken code into meaningful pieces
 * 
 */

export function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
}