import create from 'zustand';

export const useStore = create((set, get) => ({
    currentUser: null,
    setCurrentUser: (user) => set((state) => ({ currentUser: user })),
    showSignUpError: false,
    setShowSignUpError: (val) => set((state) => ({ showSignUpError: val })),
    showLogInError: false,
    count: 0,
    setCount: (val) => set((state) => ({ count: val })),
    tags: [],
    setTags: (val) => set((state) => ({ tags: val })),
    questions: [],
    setQuestions: (questions) => set((state) => ({ questions: questions })),
    users: [],
    setUsers: (val) => set((state) => ({ users: val })),
    setShowLogInError: (val) => set((state) => ({ showLogInError: val })),
    products: [],
    currentQuestion: null,
    setCurrentQuestion: (question) => set((state) => ({ currentQuestion: question })),
    setProducts: (products) => set((state) => ({ products: products })),
    updateQuantity: async (e, order, loggedUser, itemId) => {
        const quantity = document.querySelector(
            `select#cart${order.Item?.title}Quantity`
        );
        const stringifiedUser = await fetch(
            `http://localhost:3009/update-quantity`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify({
                    
                    quantity: order
                    //@ts-ignore
                        ? +quantity.value
                        : get().currentUser.itemsOrdered.find(
                              (order) => order.itemId === itemId
                          ).quantity + 1,
                    itemId: order ? order.Item?.id : itemId,
                    userId: loggedUser.id,
                }),
            }
        );
        const parsedUser = await stringifiedUser.json();
        set({ currentUser: parsedUser });
    },
}));
